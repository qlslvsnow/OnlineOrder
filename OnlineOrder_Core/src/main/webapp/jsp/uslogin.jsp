<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/base.css">
    <link rel="stylesheet" type="text/css" href="css/boilerplate.css">
    <link rel="stylesheet" type="text/css" href="css/baseC.css">


    <title></title>
    <script type="text/javascript" src="js/respond.min.js"></script>

</head>
<body>

<div class="gridContainer clearfix">
    <div id="loginContent"> 　　　　　　　　　　　
        <form action="login" method="post" autocomplete="off">
            <p class="pass-form-item">
                <label class="pass-label">手机/邮箱/用户名</label>
                <div id="validateUserNameCheck"><s:fielderror fieldName="userName"/></div>
                <input type="text" name="username" placeholder="手机/邮箱/用户名"
                       id="username" maxlength="20" autofocus>
            </p>

            <p class="pass-form-item">
                <label class="pass-label">密码</label>
                <div id="validatePasswordCheck"><s:fielderror fieldName="password"/></div>
                <input type="password" name="password" id="password" maxlength="20"
                       placeholder="密码"/>
            </p>
            <p class="pass-button-forgetpsw">
                <a id="forgetpassword" href="/forget-password">忘记密码？</a>
                <input type="submit" class="pass-button-submit" value="登陆" />
            </p>
        </form>
    </div>
</div>
</body>
</html>

