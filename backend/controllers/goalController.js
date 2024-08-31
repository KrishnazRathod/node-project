import asyncHandler from "express-async-handler";

export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

export const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add Text File");
  }
  res.status(200).json({ message: "Post Goals" });
});

export const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals  ${req.params.id}` });
});

export const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals  ${req.params.id}` });
});
