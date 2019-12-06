package de.rgse.brewlog.process.model;

import com.google.firebase.auth.FirebaseToken;
import lombok.Data;

import javax.enterprise.inject.Alternative;

@Alternative
@Data
public class UserInfo {

	public String userId;

	public static UserInfo of(FirebaseToken token) {
		UserInfo userInfo = new UserInfo();
		userInfo.userId = token.getUid();
		return userInfo;

	}
}
