package de.rgse.brewlog.process.services;

import com.querydsl.jpa.impl.JPAQuery;
import de.rgse.brewlog.process.model.Biertyp;
import de.rgse.brewlog.process.model.QBiertyp;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

public class BiertypService extends GenericService<Biertyp> {

	private static final QBiertyp BIERTYP = QBiertyp.biertyp;

	@Inject
	public BiertypService(EntityManager entityManager) {
		super(entityManager, BIERTYP);
	}

	public List<Biertyp> queryBiertypen(String query) {
		return new JPAQuery<Biertyp>(entityManager())
				.from(BIERTYP)
				.where(BIERTYP.name.containsIgnoreCase(query))
				.fetch();
	}
}
