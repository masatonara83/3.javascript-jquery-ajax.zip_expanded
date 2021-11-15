package com.sample.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("pass")
public class Ex02ApiController {

	@RequestMapping(value = "/check", method = RequestMethod.POST)
	public Map<String, String> check(String password, String password2){
		Map<String, String> map = new HashMap<>();
		String passError = null;
		String passError2 = null;
		
		System.out.println(password2);
		
		if(password.length() < 8 ) {
			passError = "パスワードは８文字以上で入力してください";
			
		} else {
			passError = "パスワード入力OK！";
		}
		map.put("passError", passError);
		
		if(password.equals(password2)) {
			passError2 = "確認用パスワード入力OK";
		}else {
			passError2 = "パスワードが一致しません";
		}
		
		
		
		map.put("passError2", passError2);
		return map;
	}
}
