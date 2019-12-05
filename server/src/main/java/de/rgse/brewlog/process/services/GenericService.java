package de.rgse.brewlog.process.services;

import com.querydsl.core.types.dsl.EntityPathBase;
import de.rgse.brewlog.process.model.Identifiable;

import javax.persistence.EntityManager;

public class GenericService<T extends Identifiable> {

	private EntityManager entityManager;
	private EntityPathBase<T> path;

	protected GenericService(EntityManager entityManager, EntityPathBase<T> path) {
		this.entityManager = entityManager;
		this.path = path;
	}

	public T persist(T toPersist) {
		entityManager.persist(toPersist);
		return toPersist;
	}

	public T get(String id) {
		return entityManager.find(path.getType(), id);
	}

	public T update(T toUpdate) {
		return entityManager.merge(toUpdate);
	}

	public void remove(T toRemove) {
		entityManager.remove(toRemove);
	}

	protected EntityManager entityManager() {
		return entityManager;
	}
}
