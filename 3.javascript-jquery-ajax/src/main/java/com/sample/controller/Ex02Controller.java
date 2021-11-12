package com.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("pass")
public class Ex02Controller {

	@RequestMapping("")
	public String index() {
		return "ex02";
	}
}
