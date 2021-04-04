ALTER TABLE Registration
    ADD CONSTRAINT area_foreign_city
        FOREIGN KEY (AreaName)
            REFERENCES CityRegion(AreaName)
            ON DELETE CASCADE;
