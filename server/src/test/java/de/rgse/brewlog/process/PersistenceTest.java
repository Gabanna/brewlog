package de.rgse.brewlog.process;

import org.junit.Before;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.RollbackException;
import java.util.function.Supplier;

public class PersistenceTest {

	protected EntityManager entityManager;

	@Before
	public void setupPersistenceTest() throws Exception{
		PersistenceTestConfig config = PersistenceTestConfig.readConfig();
		new DbMigrator(config.getJdbcUrl(), config.getUsername(), config.getPassword()).migrate();
		entityManager = PersistenceProvider.entityManager();
	}

	protected <T> T transact(Supplier<T> runnable) {
		EntityTransaction transaction = entityManager.getTransaction();
		T result = null;

		try {
			transaction.begin();
			result = runnable.get();
			transaction.commit();

		} catch(Exception e) {
			transaction.rollback();
			transaction.setRollbackOnly();
			throw new RollbackException(e);
		}

		return result;
	}
}
