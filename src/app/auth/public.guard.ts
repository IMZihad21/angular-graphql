import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { filter, map, switchMap } from "rxjs";
import { AuthService } from "./auth.service";

export const publicGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoading.pipe(
    filter((loading) => loading === false),
    switchMap(() => authService.isAuthenticated),
    map((value) => {
      if (value !== true) {
        return true;
      } else {
        return router.parseUrl("/");
      }
    })
  );
};
