      /* Regular expressions are patterns used to match character combinations in
      strings. */
      /a/.test("apples"); //Regular expressions -> 문자검사 가능. 있는지 검사할 문자 = a
      /[a-z]/.test("apples"); //범위지정 가능. a-z 중 아무글자 하나가 있나 true
      /[A-Z]/.test("apples"); //false
      /[a-zA-Z]/.test("apples"); // = 아무 알파벳 1개나
      //귀찮다면
      /\S/.test("apples") //백슬래쉬+S -> 그냥 아무 문자 1글자나. 특수기호도 포함.
      /^a/.test("abc"); //시작문자 검사하기 true
      /a|b/.test("apples"); //a or b true
      /a$/.test("mia"); //끝문자 검사하기
      /\S@\S\.\S/.test('a@b.c') // .은 Regular expressions 내 특수 문법역할. 그래서 \ 쳐줘야함.
      /* \S 아무 문자 한!글자! 를 뜻함. so, test('a@bv.c')는 false */
      /\S+@\S+\.\S+/.test('a23@bv.c') // +는 왼쪽 문자 반복검색 now true
      /* regexr */