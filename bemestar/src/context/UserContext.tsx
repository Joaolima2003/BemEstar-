import React, { createContext , useState, ReactNode } from 'react'

export interface UserRegistration{
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  height: number;
  weight: number;
  goal: "Lose Weight" | "Gain Muscle" | "Improve Health" | "Reduce Stress";
  activityLevel: "Sedentary" | "Moderate" | "Active" | "Athlete";
}

