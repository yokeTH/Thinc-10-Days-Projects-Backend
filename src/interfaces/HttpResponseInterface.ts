interface HttpResponse {
  statusCode: number;
  statusText: string;
  message: string;
  data: Object;
}

export default HttpResponse;
