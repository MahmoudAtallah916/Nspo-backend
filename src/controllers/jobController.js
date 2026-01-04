import { connectDB } from "../config/database.js";
import Job from "../models/Job.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    await connectDB(); // تأكد الاتصال MongoDB جاهز

    const { title, description, startDate, endDate } = req.body;
    if (!title || !description || !startDate || !endDate) {
      return res.status(400).json({
        error: "Title, description, startDate and endDate are required",
      });
    }

    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    await connectDB(); // تأكد الاتصال MongoDB جاهز

    const jobs = await Job.find();
    res.json(jobs);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get job by ID
export const getJobById = async (req, res) => {
  try {
    await connectDB(); // تأكد الاتصال MongoDB جاهز

    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    await connectDB(); // تأكد الاتصال MongoDB جاهز

    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    await connectDB(); // تأكد الاتصال MongoDB جاهز

    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json({ message: "Job deleted" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
