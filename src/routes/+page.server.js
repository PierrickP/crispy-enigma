import knex from "knex";

const db = knex({
  client: "pg",
  connection:
    "postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs",
});

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    data: db("rnc_database"),
  };
}
