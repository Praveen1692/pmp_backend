import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheak = (req, res) => {
//   try {
//     return res
//       .status(200)
//       .json(new ApiResponse(200, { message: "Server is running.." }));
//   } catch (error) {}
// };

const healthCheak = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is running Okay..." }));
});

export { healthCheak };
