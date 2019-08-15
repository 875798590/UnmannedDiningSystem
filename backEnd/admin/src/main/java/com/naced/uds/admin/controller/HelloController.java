package com.naced.uds.admin.controller;

import com.alibaba.fastjson.JSON;
import com.naced.uds.admin.mapper.SysUserMapper;
import com.naced.uds.admin.model.SysUser;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * helloworld.
 *
 * @author wanggang (wanggang@nvoccservicecenter.com)
 * @since 2019年08月15日 15时12分
 */
@RestController("/index")
public class HelloController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SysUserMapper sysUserMapper;

    @RequestMapping()
    public String index() {
        List<SysUser> list = sysUserMapper.getAll();
        logger.info(JSON.toJSONString(list));
        return "hello nacedWang !";
    }
}
