package de.rgse.brewlog.process;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.IOException;

public class PersistenceProvider {

	private static final EntityManagerFactory EMF;

	static {
		try {
			PersistenceTestConfig config = PersistenceTestConfig.readConfig();
			EMF = Persistence.createEntityManagerFactory("brewlogPU_test", config.asJdbcProps());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public static EntityManager entityManager() {
		return EMF.createEntityManager();
	}
}
