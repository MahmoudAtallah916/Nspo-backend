import { connectDB } from "../config/database.js";
import UIControl from "../models/UIControl.js";
import { featureFlagCache } from "../utils/cache.js";

export const checkFeature = (key) => {
  return async (req, res, next) => {
    try {
      await connectDB();

      // Check cache first
      let control = featureFlagCache.get(key);

      if (!control) {
        control = await UIControl.findOne({ key });
        if (control) {
          featureFlagCache.set(key, control);
        }
      }

      // If control does not exist in DB, default to true (enabled)
      if (!control) {
        return next();
      }

      // 1. Check isEnabled
      if (control.isEnabled === false) {
        return res.status(403).json({
          success: false,
          message: control.fallback?.message || `Feature '${key}' is disabled`,
        });
      }

      // 2. Check schedule (if present)
      if (control.schedule) {
        const now = new Date();
        const { startDate, endDate } = control.schedule;

        if (startDate && new Date(startDate) > now) {
          return res.status(403).json({
            success: false,
            message: control.fallback?.message || `Feature '${key}' is not active yet`,
          });
        }

        if (endDate && new Date(endDate) < now) {
          return res.status(403).json({
            success: false,
            message: control.fallback?.message || `Feature '${key}' has expired`,
          });
        }
      }

      // 3. Check roles (if present)
      if (control.roles && control.roles.length > 0) {
        // Resolve user role: if req.adminId exists, role is 'admin', otherwise check req.user?.role
        const userRole = req.user?.role || (req.adminId ? 'admin' : null);
        
        if (!userRole || !control.roles.includes(userRole)) {
          return res.status(403).json({
            success: false,
            message: `Your role does not have access to feature '${key}'`,
          });
        }
      }

      next();
    } catch (err) {
      console.error(`Error in checkFeature middleware for key ${key}:`, err);
      res.status(500).json({ error: "Internal server error checking feature flag" });
    }
  };
};
