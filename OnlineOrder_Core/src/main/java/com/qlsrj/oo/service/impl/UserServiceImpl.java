package com.qlsrj.oo.service.impl;

import com.qlsrj.oo.dao.IbaseDao;
import com.qlsrj.oo.dto.User;
import com.qlsrj.oo.service.IuserService;

import java.util.List;

/**
 *
 */
public class UserServiceImpl implements IuserService {

    private IbaseDao baseDao;

    public void setBaseDao(IbaseDao baseDao) {
        this.baseDao = baseDao;
    }

    @Override
    public User login(User user) {
        List<User> list = baseDao.findAll(
                "from User where username = ? and password = ?", User.class,
                new Object[] { user.getUserName(), user.getPassword() });
        if (list.size() == 1) {
            return list.get(0);
        }
        return null;
    }
}
