CREATE TABLE IF NOT EXISTS Registration(
    locationID SERIAL PRIMARY KEY,
    AreaName VARCHAR,
    TerName VARCHAR,
    UNIQUE (AreaName, TerName)
);
