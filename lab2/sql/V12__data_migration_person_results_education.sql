INSERT INTO public.education(eoname, classlangname, classprofilename, eoparent, eotypename)
SELECT eoname, classlangname, classprofilename, eoparent, eotypename
FROM zno_results WHERE eoname IS NOT NULL
    ON CONFLICT (eoname)
DO NOTHING;

INSERT INTO person(outid, birth, sextypename, regtypename, eoname)
SELECT outid, birth, sextypename, regtypename, eoname
FROM zno_results;

INSERT INTO results(test, outid, ball100, teststatus, ball12, ball, ptname)
SELECT ukrtest, outid, ukrball100, ukrteststatus, ukrball12, ukrball, ukrptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT phystest, outid, physlang, physball100, physteststatus, physball12, physball, physptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT mathtest, outid, mathlang, mathball100, mathteststatus, mathball12, mathball, mathptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT chemtest, outid, chemlang, chemball100, chemteststatus, chemball12, chemball, chemptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT histtest, outid, histlang, histball100, histteststatus, histball12, histball, histptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT biotest, outid, biolang, bioball100, bioteststatus, bioball12, bioball, bioptname
FROM zno_results;

INSERT INTO results(test, outid, lang, ball100, teststatus, ball12, ball, ptname)
SELECT geotest, outid, geolang, geoball100, geoteststatus, geoball12, geoball, geoptname
FROM zno_results;

INSERT INTO results(test, outid, ball100, teststatus, ball12, ball, ptname)
SELECT engtest, outid, engball100, engteststatus, engball12, engball, engptname
FROM zno_results;

INSERT INTO results(test, outid, ball100, teststatus, ball12, ball, ptname)
SELECT fratest, outid, fraball100, frateststatus, fraball12, fraball, fraptname
FROM zno_results;

INSERT INTO results(test, outid, ball100, teststatus, ball12, ball, ptname)
SELECT deutest, outid, deuball100, deuteststatus, deuball12, deuball, deuptname
FROM zno_results;

INSERT INTO results(test, outid, ball100, teststatus, ball12, ball, ptname)
SELECT spatest, outid, spaball100, spateststatus, spaball12, spaball, spaptname
FROM zno_results;

INSERT INTO public.education(eoname, classlangname, classprofilename, eoparent, eotypename)
SELECT eoname, classlangname, classprofilename, eoparent, eotypename
FROM zno_results WHERE eoname IS NOT NULL
    ON CONFLICT (eoname)
DO NOTHING;


-- insert locations in Person
DROP TABLE IF EXISTS temp_reg;
CREATE TABLE IF NOT EXISTS temp_reg
AS (SELECT outid, areaname, tername
    FROM zno_results);

ALTER TABLE temp_reg DROP CONSTRAINT IF EXISTS composite_foreign_key;

ALTER TABLE temp_reg
    ADD CONSTRAINT composite_foreign_key
        FOREIGN KEY(areaname, tername)
            REFERENCES registration(areaname, tername);

INSERT INTO person(outid, registrationlocation)
SELECT t.outid, s.locationid
FROM public.registration as s
         INNER JOIN temp_reg as t
                    ON s.areaname = t.areaname
                        AND s.tername = t.tername
    ON CONFLICT(outid)
DO UPDATE SET registrationlocation=EXCLUDED.registrationlocation;
