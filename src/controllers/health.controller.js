import { ApiResponse } from "../utils/api-response.js";

const healthCheak = (req, res) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is running.." }));
  } catch (error) {}
};

export { healthCheak };
