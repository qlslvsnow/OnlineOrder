package com.qlsrj.oo.action;

import com.opensymphony.xwork2.validator.annotations.RequiredFieldValidator;
import com.qlsrj.oo.dto.User;
import com.qlsrj.oo.service.IuserService;

/**
 * 用户登录Action
 */
public class LoginAction extends ActionBase{
    private static final long serialVersionUID = 1L;

    private String username;
    private String password;

    private IuserService userService;

    public void setUserService(IuserService userService) {
        this.userService = userService;
    }

    public String login() throws Exception {
        User user = new User();
        user.setUserName(username);
        user.setPassword(password);
        User login = userService.login(user);
        if (login != null) {
            return SUCCESS;
        }

        return INPUT;
    }

    @RequiredFieldValidator(message = "请填写用户名")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @RequiredFieldValidator(message = "请填写密码")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
