export async function RegisterInDataBase(DataForDatabase: any) {
  fetch("/api/mongopost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: DataForDatabase,
  });
}

export default RegisterInDataBase;
