patients = Patient.all

patients.map |patient| do patient.admitted = true