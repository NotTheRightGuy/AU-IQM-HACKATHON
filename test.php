SELECT JSON_OBJECT
    ('fname', fname,
     'lname', lname, 
     'm_no', m_no)
      FROM interns INTO OUTFILE 'M:/GitHub/AU-IQM-HACKATHON/test.json'