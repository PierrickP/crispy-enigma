import postgres from "postgres";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const db = postgres(
    "postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs"
  );

  return {
    now: new Date(),
    data: db`SELECT NOW(), count(*) FROM rnc_database LIMIT 1`,
  };
}
