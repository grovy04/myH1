erDiagram
    COURSE {
        int 과목코드 PK "Primary Key"
        string 과목이름
        string 교수
        string 강의요일
        string 강의시간
    }

    STUDENT {
        int 학번 PK "Primary Key"
        string 이름
        int 수강신청과목코드 FK "Foreign Key"
    }

    STUDENT ||--|| COURSE 
