package de.rgse.brewlog.process.rest.endpoints;

import de.rgse.brewlog.process.model.UserInfo;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;

public class UserInfoConsumer {

    @Context
    private HttpServletRequest request;

    public UserInfoConsumer() {}

    public UserInfoConsumer(HttpServletRequest request){
        this.request = request;
    }

    protected UserInfo userInfo() {
        return (UserInfo) request.getAttribute(UserInfo.NAME);
    }
}
