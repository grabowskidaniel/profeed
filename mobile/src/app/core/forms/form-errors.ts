
import { InjectionToken } from '@angular/core';


export const defaultErrors = {
  required: (error) => `Campo obrigatório`,
  minlength: ({ requiredLength, actualLength }) => `Tamanho mínimo de ${requiredLength} você inseriu ${actualLength}`
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});


