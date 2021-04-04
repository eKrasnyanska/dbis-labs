ALTER TABLE Person
    ADD CONSTRAINT education_key_2
        FOREIGN KEY (EOName)
            REFERENCES Education(EOName)
            ON DELETE CASCADE;

ALTER TABLE results
    ADD CONSTRAINT results_for_person
        FOREIGN KEY (outid)
            REFERENCES person(outid)
            ON DELETE CASCADE;
