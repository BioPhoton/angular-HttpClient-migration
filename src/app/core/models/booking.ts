export type passengerLevel = 'A' | 'B' | 'C';

export interface BookingFlight {
  id: number,
  von: string,
  nach: string,
  datum: Date,
  abflugort?: string,
  zielort?: string,
  plaetze?: number,
  freiePlaetze?: number
}

export interface BookingPassenger {
  passagierStatus: passengerLevel,
  flugSet: null,
  id: number,
  vorname: string,
  name: string,
  geburtsdatum: Date
}

export interface Booking {
  flugID: number,
  passagierID: number,
  flug: BookingFlight,
  passagier: BookingPassenger,
  buchungsStatus: string
}
