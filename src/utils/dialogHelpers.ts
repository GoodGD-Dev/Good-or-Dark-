import { DialogLine } from '../types/DialogLine'

export function line(name: string, text: string, avatar?: string): DialogLine {
  return { name, text, avatar }
}
