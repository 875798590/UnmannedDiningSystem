package com.naced.uds.admin.model;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户.
 *
 * @author wanggang (wanggang@nvoccservicecenter.com)
 * @since 2019年08月15日 15时19分
 */
@Data
public class SysUser implements Serializable {

    private static final long serialVersionUID = 6524844810796409198L;

    private Long id;
    private String account;
    private String password;
}
