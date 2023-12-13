import { useRouter } from "next/router";



export async function RegisterInTaxiDataBase(DataForDatabase: any) {

  fetch("/api/mongoTaxiPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: DataForDatabase,
  });
}

export default RegisterInTaxiDataBase;
