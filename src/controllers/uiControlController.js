import { connectDB } from "../config/database.js";
import UIControl from "../models/UIControl.js";
import { featureFlagCache } from "../utils/cache.js";

// Get all UI controls
export const getUIControls = async (req, res) => {
  try {
    await connectDB();
    
    // Check cache first
    const cachedAll = featureFlagCache.get("all_controls");
    if (cachedAll) {
      return res.json(cachedAll);
    }

    const controls = await UIControl.find();
    featureFlagCache.set("all_controls", controls);
    res.json(controls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get single UI control by key
export const getUIControlByKey = async (req, res) => {
  try {
    await connectDB();
    const { key } = req.params;

    // Check cache first
    const cachedControl = featureFlagCache.get(key);
    if (cachedControl) {
      return res.json(cachedControl);
    }

    const control = await UIControl.findOne({ key });
    if (!control) {
      return res.status(404).json({ error: "Feature flag not found" });
    }

    featureFlagCache.set(key, control);
    res.json(control);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Create a new UI control
export const createUIControl = async (req, res) => {
  try {
    await connectDB();
    const { key, type, scope, isEnabled, fallback, roles, schedule } = req.body;

    if (!key || !type || !scope || !scope.page) {
      return res.status(400).json({
        error: "Key, type, and scope.page are required fields",
      });
    }

    const newControl = new UIControl({
      key,
      type,
      scope,
      isEnabled: isEnabled !== undefined ? isEnabled : true,
      fallback,
      roles,
      schedule,
    });

    await newControl.save();

    // Clear cache
    featureFlagCache.delete(key);
    featureFlagCache.delete("all_controls");

    res.status(201).json(newControl);
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(409).json({ error: "Feature flag with this key already exists" });
    }
    res.status(400).json({ error: err.message });
  }
};

// Update a UI control by key
export const updateUIControl = async (req, res) => {
  try {
    await connectDB();
    const { key } = req.params;

    const updatedControl = await UIControl.findOneAndUpdate(
      { key },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedControl) {
      return res.status(404).json({ error: "Feature flag not found" });
    }

    // Clear cache
    featureFlagCache.delete(key);
    featureFlagCache.delete("all_controls");

    res.json(updatedControl);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
