package de.rgse.brewlog.process;

import org.camunda.bpm.application.ProcessApplication;
import org.camunda.bpm.application.impl.ServletProcessApplication;

@ProcessApplication("Brew Process App")
public class BrewProcessApplication extends ServletProcessApplication{
}
