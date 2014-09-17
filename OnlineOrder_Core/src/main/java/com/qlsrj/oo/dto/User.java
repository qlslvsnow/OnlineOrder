package com.qlsrj.oo.dto;


import javax.persistence.*;

/**
 * 用户信息实例类
 */
@Entity
@Table(name="userinfo")
public class User {

    // primary key
    public int id;

    // 用户名
    public String userName;

    // 密码
    public String password;

    // 年龄
    public String age;

    // 性别
    public String sex;

    // 用户类型
    public String userType;

    // 删除区分
    public String logicaldel;

    // 电话号码
    public String phoneNum;

    // 创建时间
    public String currenTime;

    // 更新时间
    public String updateTime;

    public User() {

    }

    public User(String userName, String password, String age, String sex,
                String userType, String logicaldel, String phoneNum) {

        this.userName = userName;
        this.password = password;
        this.age = age;
        this.sex = sex;
        this.userType = userType;
        this.logicaldel = logicaldel;
        this.phoneNum = phoneNum;

    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogicaldel() {
        return logicaldel;
    }

    public void setLogicaldel(String logicaldel) {
        this.logicaldel = logicaldel;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getCurrenTime() {
        return currenTime;
    }

    public void setCurrenTime(String currenTime) {
        this.currenTime = currenTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
