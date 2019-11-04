package de.rgse.brewlog.process.util;

import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class EntityManagerFactory {

	@PersistenceContext(unitName = "brewlogPU")
	private EntityManager entityManager;

	@Produces
	private EntityManager createEntityManager() {
		return entityManager;
	}
}
