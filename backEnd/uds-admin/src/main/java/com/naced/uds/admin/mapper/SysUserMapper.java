package com.naced.uds.admin.mapper;

import com.naced.uds.admin.model.SysUser;
import java.util.List;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

/**
 * sysUser.
 *
 * @author wanggang (wanggang@nvoccservicecenter.com)
 * @since 2019年08月15日 15时21分
 */
public interface SysUserMapper {

    @Select("SELECT * FROM sys_user")
    @Results({
        @Result(property = "id",
            column = "user_id"), @Result(property = "account",
        column = "account"),})
    List<SysUser> getAll();
}
