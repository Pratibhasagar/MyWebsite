package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author: Pratibhasagar V.
 */
@Controller
public class LoginController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String Login() {
        return "login";
    }
}
