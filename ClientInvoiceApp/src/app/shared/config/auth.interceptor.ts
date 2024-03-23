import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxcnh0aXJkdHJmdGR3ZXZiZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQxNTIsImV4cCI6MjAyMzkzMDE1Mn0.kGEPuA9nD593NsUGEZBhUih-gbBToeQx-jebRcfY1pU";

  const authReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'apiKey': authToken,
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};


