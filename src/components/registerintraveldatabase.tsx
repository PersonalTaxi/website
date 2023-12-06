export async function RegisterInTravelDataBase(DataForDatabaseTravel: any) {
  fetch("/api/mongoTravelPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: DataForDatabaseTravel,
  });
}

export default RegisterInTravelDataBase;
