import dares from "../fixtures/dares.json"

import { loadFromLocal, saveToLocal } from '../lib/localStorage'

export function getDares() {
  return loadFromLocal('dares') ?? dares
}

export function saveDares(dares) {
  saveToLocal('dares', dares)
}