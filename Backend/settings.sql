-- settings.sql
CREATE DATABASE backend;
CREATE USER backenduser WITH PASSWORD 'backend';
GRANT ALL PRIVILEGES ON DATABASE backend TO backenduser;