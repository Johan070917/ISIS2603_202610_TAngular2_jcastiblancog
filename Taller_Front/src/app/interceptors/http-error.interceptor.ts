import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      switch (err.status) {
        case 400:
          console.error('[WeatherAPI 400] Parámetro q inválido o ciudad no encontrada.');
          break;
        case 401:
          console.error('[WeatherAPI 401] API Key inválida o no proporcionada.');
          break;
        case 403:
          console.error('[WeatherAPI 403] La API Key no tiene acceso al endpoint solicitado.');
          break;
        default:
          console.error(`[HTTP ${err.status}] ${err.message}`);
      }
      return throwError(() => err);
    })
  );
};
