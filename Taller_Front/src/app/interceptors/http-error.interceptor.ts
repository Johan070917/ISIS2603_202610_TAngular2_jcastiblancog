import { HttpInterceptorFn } from '@angular/common/http';

/*
 * Implementar: HU-04 — Interceptor de Errores HTTP
 */

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
