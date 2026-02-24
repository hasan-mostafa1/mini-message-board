#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  sender VARCHAR ( 255 ),
  added TIMESTAMPTZ
);

INSERT INTO messages (text, sender, added) 
VALUES
  ('Hi there!', 'Amando', '${new Date().toUTCString()}'),
  ('Hello World!', 'Charles', '${new Date().toUTCString()}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?sslmode=require&channel_binding=require`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
