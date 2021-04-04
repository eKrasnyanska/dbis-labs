INSERT INTO cityregion(areaname, regname, tertypename)
SELECT DISTINCT areaname, regname, tertypename
FROM zno_results src
    ON CONFLICT (areaname)
DO NOTHING;

INSERT INTO registration(areaname, tername)
SELECT DISTINCT areaname, tername
FROM zno_results src;

