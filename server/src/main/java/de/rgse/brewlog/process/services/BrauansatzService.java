package de.rgse.brewlog.process.services;

import de.rgse.brewlog.process.model.Biertyp;
import de.rgse.brewlog.process.model.Brauansatz;
import de.rgse.brewlog.process.model.QBrauansatz;
import de.rgse.brewlog.process.model.vo.CreateBraulogRequest;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class BrauansatzService extends GenericService<Brauansatz> {

	private static final QBrauansatz BRAUANSATZ = QBrauansatz.brauansatz;

	@Inject
	public BrauansatzService(EntityManager entityManager) {
		super(entityManager, BRAUANSATZ);
	}

	public Brauansatz create(CreateBraulogRequest request) {
		Biertyp biertyp = entityManager().find(Biertyp.class, request.getBiertypId());

		Brauansatz brauansatz = new Brauansatz();
		brauansatz.setBiermengeInMl(request.getBiermengeInMl());
		brauansatz.setBrauer(request.getBrauer());
		brauansatz.setBrauverfahren(request.getBrauverfahren());
		brauansatz.setHefeart(request.getHefeart());
		brauansatz.setBiertyp(biertyp);

		return persist(brauansatz);
	}
}
