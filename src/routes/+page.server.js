import knex from "knex";

const db = knex({
  client: "pg",
  connection:
    "postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs",
});

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    now: new Date(),
    data: db("rnc_database").select(db.raw("NOW(), count(*)")).first(),
  };
}
