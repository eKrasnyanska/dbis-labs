ALTER TABLE Person
    ADD CONSTRAINT location
        FOREIGN KEY (RegistrationLocation)
            REFERENCES Registration(locationID)
            ON DELETE CASCADE;

