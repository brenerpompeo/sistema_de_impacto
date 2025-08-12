import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina nomes de classe do Tailwind de forma inteligente,
 * evitando conflitos e otimizando a legibilidade.
 * @param inputs - Nomes de classe a serem combinados.
 * @returns Uma string com os nomes de classe finais.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
