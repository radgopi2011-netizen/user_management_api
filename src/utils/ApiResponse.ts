export class ApiResponse {
  static success(data: any, message = "Success") {
    return {
      success: true,
      message,
      data,
    };
  }

  static error(code: string, message: string) {
    return {
      success: false,
      error: {
        code,
        message,
      },
    };
  }
}
